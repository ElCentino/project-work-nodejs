$(document).ready(function () {

    let keys = [];
    let globalKey = 0;

    const bracketKeys = document.querySelectorAll(".ministries-side-nav ul li");

    for(key of bracketKeys) {
        keys.push(key.getAttribute("data-bracket"));
    }

    console.log(keys);

    function currentRequestObject(index) {
        
        let currentRequest = index;

        return {
            nextRequestIndex : function() {

                if(currentRequest >= keys.length - 1) {

                    currentRequest = 0;
                    return currentRequest;
                }

                return ++currentRequest;
            },
            previousRequestIndex : function() {

                if(currentRequest <= 0) {

                    currentRequest = keys.length -1;
                    return currentRequest;
                }

                return --currentRequest;
            }
        }
    }

    let requestIndex = currentRequestObject(0);

    const prevRequest = function() {

        var request = makeRequest.bind(this);
        request(keys[requestIndex.previousRequestIndex()]);
    };

    const nextRequest = function() {
        var request = makeRequest.bind(this);
        request(keys[requestIndex.nextRequestIndex()]);
    };

    const makeRequest = function(key, keys) {

        var dataBracket;

        if(key) {
            dataBracket = key;
        } else {
            dataBracket = $(this).attr("data-bracket");
        }

        xhr = new XMLHttpRequest();
        xhr.open('GET', 'json/ministries.json', true);

        xhr.onprogress = function() {

        };

        xhr.onload = function() {

            let data = JSON.parse(this.responseText);

            let article = data.filter(function(text) {
                return dataBracket.toLowerCase() == text.bracket.toLowerCase();
            });

            $(".ministries-section").fadeOut(function() {
                $(this).fadeIn();
                $(".ministries-header").html(article[0].title);
                $(".ministries-body").html(article[0].contents);
            });
            
        };

        xhr.send();
    };

    var request = makeRequest.bind(this);
    request("CBS", keys);


    $(".ministries-side-nav ul li").on('click', function(e) {
        
        globalKey = keys.indexOf($(this).attr("data-bracket"));
        requestIndex = currentRequestObject(globalKey);

        e.preventDefault();
        var request = makeRequest.bind(this);
        request();
    });

    $(".next-button").on('click', function() {
        nextRequest.call(this);
    });

    $(".prev-button").on('click', function() {
        prevRequest.call(this);
    });
});