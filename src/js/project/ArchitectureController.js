/**
 * Created by Andrea Thacker
 */
(function(){

    app.controller('architectureController', function($scope ) {

        var ac = this;
        ac.title='';
        ac.components=[];

        ac.init=init();

        function init(){
            console.log('Initialize the Architcture Controller as ac');
            ac.title = 'Architecture';
            setUpTestData();
        }

        /**
         * TODO: replace with service data restful calls to backend database
         */
        function setUpTestData(){
            ac.components.push({'title':'Angular','value':'use angular for front end javascript '});
            ac.components.push({'title':'Node','value':'use to install project compnents'});
            ac.components.push({'title':'Grunt','value':'use at front end build tool, might migrate to gradle at a later date'});
            ac.components.push({'title':'Bootstrap UI','value':'avoid using jquery -- stick with jquery lite'});
            ac.components.push({'title':'Tomcat','value':'Currently using -- will migrate to cloud.. probably Azure'});
            ac.components.push({'title':'JsHint','value':'Javascript Code Cleanup'});
            ac.components.push({'title':'Database','value':'Yet to be determined'});
            ac.components.push({'title':'Accessibility','value':'NgAria -- yet to be implemented'});
            ac.components.push({'title':'Mobile','value':'Use Responsive Code Techniques and test before checkins.'});
        }

    });







})();
