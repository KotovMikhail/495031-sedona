ymaps.ready(init);
var myMap,
myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [34.87195183, -111.75626900],
        zoom: 13
    });

    myPlacemark = new ymaps.Placemark([34.87195183, -111.75626900], {
        hintContent: 'Седона Соединенные Штаты Америки, Аризона, Коконино-Каунти!',
        balloonContent: 'Добро пожаловать!'
    });

    myMap.geoObjects.add(myPlacemark);
}
