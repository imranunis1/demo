
        var app = angular.module('my digital clock',[]);
        app.controller('ClockCtrl', function($scope ,$interval,$sce){
           // $scope.today = new Date();
            $scope.timeStamp = function(){
                $scope.monthArray = ['January','February','March','April','May','June',
                'July','August','September','October','November','December'];
                $scope.dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


                var date = new Date();
                var day = date.getDate();
                var month = $scope.monthArray[date.getMonth()];
                var year = date.getFullYear();
                var week = $scope.dayArray[date.getDay()];

                var time  = date.toLocaleTimeString();
                var hour = time.substring(0,time.search(":"));
                var mint = time.substring(time.search(":")+1, time.lastIndexOf(":"));
                var daylight = time.substring(time.search("M")-2,time.search("M")+1);



               return   week + "," +month +" "+ day +"," + year +"."+ hour + $scope.html()+ mint + daylight; //+ time;

            };

            $scope.html = function(){
                  var me =  $sce.trustAsHtml(':');

                     if(me.className != 'hide'){
                      me.className = 'hide';
                      return  me ;
                      }else {
                      me.className = "";
                      return me;
                       }

          };


            $interval(function(){$scope.timeStamp()},1000);
            $interval(function(){$scope.html()}, 500);



        });

        function futDate(){
            var nameElement = document.getElementById("DaysToAdd").value;
            // var theName = nameElement.value;
            var str = '';
            var str1 = nameElement.split(/\./);
            var str2 = nameElement.replace(/[^A-Za-z]/g, "");
            var str3 =  /^[@!#\$\^%&*()+=\-\[\]\\\';,\.\/\{\}\|\":<>\? ]+$/;


            var myDay = new Date();
            // alert(myday)
            var weekday = new Array();
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";
            var month = new Array();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";
            myDay.setDate(myDay.getDate() + (nameElement % 10000));


            if(nameElement == str){
                document.getElementById("display").value =" Number must be filled out. ";
                return false;

            }  else if(str1.length > 1){
                document.getElementById("display").value =" Invalid Number. ";
                return false;
            }
            else if(nameElement < 0){
                document.getElementById("display").value =" Invalid Number. ";
                //alert('dont use')
                return false;
            }
            else if (nameElement.length >3){
                document.getElementById("display").value =" Use only 3 Number. ";
                //alert("Use only 3 character");
                return false;
            }
            else if(nameElement == str2){
                document.getElementById("display").value =" Use only Number. ";
                //alert('hi')
                return false;
            }
            else if(str2.length >= 1 && str2.length <= 2){
                document.getElementById("display").value =" Invalid Date. ";

                return false;
            }
            if (str3.test(nameElement)) {
                document.getElementById("display").value = "Your Input is Invalid : " + nameElement;
                // alert("Your Input is Invalid: "+nameElement);
                return true;
            }


            document.getElementById("display").value =
                weekday[myDay.getUTCDay()]+","+"("+ month[myDay.getMonth()]+")" +
                " or "+ myDay.toLocaleString();


        }




        function pastDate(){
            var nameElement = document.getElementById("DaysToAdd").value;
            // var theName = nameElement.value;
            var str = '';
            var str1 = nameElement.split(/\./);
            var str2 = nameElement.replace(/[^A-Za-z]/g, "");
            var str3 =  /^[@!#\$\^%&*()+=\-\[\]\\\';,\.\/\{\}\|\":<>\? ]+$/;


            var myDay = new Date();
            // alert(myday)
            var weekday = new Array();
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";
            var month = new Array();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";
            myDay.setDate(myDay.getDate() - (nameElement % 10000));

            if(nameElement == str){
                document.getElementById("display").value =" Number must be filled out. ";
                return false;

            } else if(str1.length > 1){
                document.getElementById("display").value =" Invalid Number. ";
                return false;
            }
            else if(nameElement < 0){
                document.getElementById("display").value =" Invalid Number. ";
                //alert('dont use')
                return false;
            }
            else if (nameElement.length >3){
                document.getElementById("display").value =" Use only 3 number. ";
                //alert("Use only 3 character");
                return false;
            }
            else if(nameElement == str2){
                document.getElementById("display").value =" Use only Number. ";
                //alert('hi')
                return false;
            }
            else if(str2.length >= 1 && str2.length <= 2){
                document.getElementById("display").value =" Invalid Date. ";

                return false;
            }
            if (str3.test(nameElement)) {
                document.getElementById("display").value = "Your Input is Invalid : " + nameElement;
                // alert("Your Input is Invalid: "+nameElement);
                return true;
            }



            document.getElementById("display").value =
                weekday[myDay.getUTCDay()]+","+"("+ month[myDay.getMonth()]+")" +
                " or "+ myDay.toLocaleString();

        }


        function futWeek(){
            var nameElement = document.getElementById("DaysToAdd").value;
            var str = '';
            var str1 = nameElement.split(/\./);
            var str2 = nameElement.replace(/[^A-Za-z]/g, "");
            var str3 =  /^[@!#\$\^%&*()+=\-\[\]\\\';,\.\/\{\}\|\":<>\? ]+$/;

            var myDay = new Date();
            // alert(myday)
            var weekday = new Array();
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";
            var month = new Array();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";
            myDay.setDate(myDay.getDate() + (nameElement % 100000 * 7));


            if(nameElement == str){
                document.getElementById("display").value =" Number must be filled out. ";
                return false;

            }  else if(str1.length > 1){
                document.getElementById("display").value =" Invalid Number. ";
                return false;
            }
            else if(nameElement < 0){
                document.getElementById("display").value =" Invalid Number. ";
                //alert('dont use')
                return false;
            }
            else if (nameElement.length >3){
                document.getElementById("display").value =" Use only 3 Number. ";
                //alert("Use only 3 character");
                return false;
            }
            else if(nameElement == str2){
                document.getElementById("display").value =" Use only Number. ";
                //alert('hi')
                return false;
            }
            else if(str2.length >= 1 && str2.length <= 2){
                document.getElementById("display").value =" Invalid Date. ";

                return false;
            }
            if (str3.test(nameElement)) {
                document.getElementById("display").value = "Your Input is Invalid : " + nameElement;
                // alert("Your Input is Invalid: "+nameElement);
                return true;
            }



            document.getElementById("display").value =
                weekday[myDay.getUTCDay()]+","+"("+ month[myDay.getMonth()]+")" +
                " or "+ myDay.toLocaleString();
        }




        function pastWeek(){
            var nameElement = document.getElementById("DaysToAdd").value;


            var str = '';
            var str1 = nameElement.split(/\./);
            var str2 = nameElement.replace(/[^A-Za-z]/g, "");
            var str3 =  /^[@!#\$\^%&*()+=\-\[\]\\\';,\.\/\{\}\|\":<>\? ]+$/;



            var myDay = new Date();
            // alert(myday)
            var weekday = new Array();
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";
            var month = new Array();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";
            myDay.setDate(myDay.getDate() - (nameElement % 100000 * 7));

            if(nameElement == str){
                document.getElementById("display").value =" Number must be filled out. ";
                return false;

            }  else if(str1.length > 1){
                document.getElementById("display").value =" Invalid Number. ";
                return false;
            }
            else if(nameElement < 0){
                document.getElementById("display").value =" Invalid Number. ";
                //alert('dont use')
                return false;
            }
            else if (nameElement.length >3){
                document.getElementById("display").value =" Use only 3 Number. ";
                //alert("Use only 3 character");
                return false;
            }
            else if(nameElement == str2){
                document.getElementById("display").value =" Use only Number. ";
                //alert('hi')
                return false;
            }
            else if(str2.length >= 1 && str2.length <= 2){
                document.getElementById("display").value =" Invalid Date. ";

                return false;
            }
            if (str3.test(nameElement)) {
                document.getElementById("display").value = "Your Input is Invalid : " + nameElement;
                // alert("Your Input is Invalid: "+nameElement);
                return true;
            }



            document.getElementById("display").value =
                weekday[myDay.getUTCDay()]+","+"("+ month[myDay.getMonth()]+")" +
                " or "+ myDay.toLocaleString();
        }
