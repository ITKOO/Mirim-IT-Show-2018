
function initMap() {
    // 미림여자정보과학고등학교 위도, 경도
    var mirimLocation = { lat: 37.466375, lng: 126.932903 };

    var map = new google.maps.Map(document.getElementById('map'),
        {
            zoom: 16,
            center: mirimLocation
        });

    // 미림여자정보과학고등하교 마커
    var mirimMarker = new google.maps.Marker
        ({
            position: mirimLocation,
            map: map
        });
 
    // 마커클릭시 나타나는 정보창에 뜨는 내용
    // 미림 관련정보
    var mirimContent =
        '<div class ="markerContent">'
        + '<p class = "main">'
        + '미림여자정보과학고등학교'
        + '</p>'
        + '<span class = "boldContent">주 &nbsp;소 :</span> 서울특별시 관악구 호암로 546'
        + '<br>'
        + '<span class = "boldContent">연락처 : </span> 02-872-4071'
        + '<br>'
        + '<span class = "boldContent">U R L : </span> <a href = "https://www.e-mirim.hs.kr">https://www.e-mirim.hs.kr</a>'
        + '</div>';

    // 정보창에 정보를 넣어줌
    var mirimInfowindow = new google.maps.InfoWindow({
        content: mirimContent
    });

    // 마커를 눌렀을때 정보가 open되게 해주는 메서드
    mirimMarker.addListener('click', function () {
        mirimInfowindow.open(map, mirimMarker);
    });

}
