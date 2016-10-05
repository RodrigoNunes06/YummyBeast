
class ApisController < ApplicationController

  def search

    results_google = GoogleService.new({
      term: params[:term],
      latitude: params[:coordinates][:lat],
      longitude: params[:coordinates][:lng]
    }).search
    
    results_yelp = YelpService.new({
      term: params[:term],
      latitude: params[:coordinates][:lat],
      longitude: params[:coordinates][:lng]
    }).search
    
    results = results_google + results_yelp  

    final_results = find_duplicate(results)

    render json: final_results

  end



  private

  def find_duplicate(results)

    final_results = []

    while results.present?
      
      node = results.pop

      results.each_with_index do |result, index|

        if same_coordinates(node,result)

          coincidence = results.slice!(index)

          node = merge_coincidence(node, coincidence)

        end
      end

      final_results.push(node)

    end

    final_results
  end


  def same_coordinates(place1,place2)
    if place1[:lng] && place2[:lng]

      minimum_difference = 0.00025

      dlon = (place1[:lng] - place2[:lng]).abs 
      dlat = (place1[:lat] - place2[:lat]).abs

      dlon < minimum_difference && dlat < minimum_difference
    else
      false
    end
  end

  def merge_coincidence(place1, place2)
    if place1[:rating] && place2[:rating]
      average = (place1[:rating] + place2[:rating])/2
    else
      average = "N/A"
    end
    ratings = [
      {rating: place1[:rating], provider: place1[:provider]},
      {rating: place2[:rating], provider: place2[:provider]},
    ]

    place = {
      name: place1[:name],
      ratings: ratings,
      lat: place1[:lat],
      lng: place1[:lng],
      average: average
    }

  end


end


