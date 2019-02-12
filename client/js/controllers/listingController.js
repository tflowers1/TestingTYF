angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
    function($scope, Listings) {

    /* Get all the listings, then bind it to the scope */
   Listings.getAll().then(function(response) {
        //confirm  $scope.loading = false; //remove loader
      $scope.listings = response.data;
      console.log(response.data);
  //  }, function(error) {
 //     console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;
   //     $scope.show = false;
   //     $scope.form = {};


    $scope.addListing = function() {
	  /**TODO -- ok
	  *Save the article using the Listings factory. If the object is successfully 
	  saved redirect back to the list page. Otherwise, display the error
	 */
        if($scope.entry !== undefined) {
//            Listings.create($scope.entry)
//                .then(function(res) {
//                    $scope.listings.push(res.data);
//                    $scope.entry = undefined;
//                })
//                .catch(function(err) {
//                    console.log(err);
//                });
            $scope.listings.push($scope.form);
            $scope.form = {};
            $scope.show = !$scope.show;
        }
        $scope.entry = undefined;
    };

    $scope.deleteListing = function(id) {
	   /**TODO -- ok? id v index
        Delete the article using the Listings factory. If the removal is successful, 
		navigate back to 'listing.list'. Otherwise, display the error. 
       */
       Listings.delete($scope.listings[id]._id);
        $scope.listings.splice(id,1);
        $scope.detailedInfo = undefined;
    };

    $scope.showDetails = function(id) {
//    angular.element('#moreInfo').collapse("show");
      $scope.detailedInfo = $scope.listings[id];
    };
        $scope.onClick = function() {
            $scope.show = !$scope.show;
        };
  }
]);