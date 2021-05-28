posterlist = ["https://technohoop.com/wp-content/uploads/2021/05/1620711078_113_Venom-Let-There-Be-Carnage-Trailer-Out-in-English-and.jpeg",
    "https://upload.wikimedia.org/wikipedia/zh/d/d6/Fast_%26_Furious_9_poster.jpg",
    "https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackwidow_lob_crd_05.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/p_rayaandthelastdragon_21294_83346778.jpeg",
    "https://upload.wikimedia.org/wikipedia/en/3/33/Luca_%282021_film%29.png",
    "https://upload.wikimedia.org/wikipedia/en/f/f6/Cruella_2021_film_poster.jpgs"]
titlelist = ["Joker", "After", "Black Panther", "Moonlight", "The Nightingale", "Dunkirk"];

function add() {
    var title = document.getElementById("title").value;
    var poster = document.getElementById("poster").value;
    titlelist.unshift(title);
    posterlist.unshift(poster);


    console.log(titlelist);
    console.log(posterlist);
    var first = posterlist[0];
    var second = posterlist[1];
    var third = posterlist[2];
    var fourth = posterlist[3];
    var fifth = posterlist[4];
    var sixth = posterlist[5];
    var first_title = titlelist[0];
    var second_title = titlelist[1];
    var third_title = titlelist[2];
    var fourth_title = titlelist[3];
    var fifth_title = titlelist[4];
    var sixth_title = titlelist[5];
    document.getElementById("first").src = first;
    document.getElementById("second").src = second;
    document.getElementById("third").src = third;
    document.getElementById("fourth").src = fourth;
    document.getElementById("fifth").src = fifth;
    document.getElementById("sixth").src = sixth;
    document.getElementById("first-name").innerHTML = first_title;
    document.getElementById("second-name").innerHTML = second_title;
    document.getElementById("third-name").innerHTML = third_title;
    document.getElementById("fourth-name").innerHTML = fourth_title;
    document.getElementById("fifth-name").innerHTML = fifth_title;
    document.getElementById("sixth-name").innerHTML = sixth_title;
}
