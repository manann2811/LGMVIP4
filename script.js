console.log('INFINITY TEAM API ');
function getData(a) {
    url = "https://reqres.in/api/users?page=1";
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        var value = data;
        var img1 = (value['data'][0]['avatar']);
        document.getElementById('image_1').src = img1;
        var img2 = (value['data'][1]['avatar']);
        document.getElementById('image_2').src = img2;
        var img3 = (value['data'][2]['avatar']);
        document.getElementById('image_3').src = img3;
        var img3 = (value['data'][3]['avatar']);
        document.getElementById('image_4').src = img3;
        var img3 = (value['data'][4]['avatar']);
        document.getElementById('image_5').src = img3;
        var img3 = (value['data'][5]['avatar']);
        document.getElementById('image_6').src = img3;
        
        var first1 = (value['data'][0]['first_name']);
        var last1 = (value['data'][0]['last_name']);
        document.getElementById('name_1').innerHTML = first1 + " " + last1;
        var first1 = (value['data'][1]['first_name']);
        var last1 = (value['data'][1]['last_name']);
        document.getElementById('name_2').innerHTML = first1 + " " + last1;
        var first1 = (value['data'][2]['first_name']);
        var last1 = (value['data'][2]['last_name']);
        document.getElementById('name_3').innerHTML = first1 + " " + last1;
        var first1 = (value['data'][3]['first_name']);
        var last1 = (value['data'][3]['last_name']);
        document.getElementById('name_4').innerHTML = first1 + " " + last1;
        var first1 = (value['data'][4]['first_name']);
        var last1 = (value['data'][4]['last_name']);
        document.getElementById('name_5').innerHTML = first1 + " " + last1;
        var first1 = (value['data'][5]['first_name']);
        var last1 = (value['data'][5]['last_name']);
        document.getElementById('name_6').innerHTML = first1 + " " + last1;
        
        var mail1 = (value['data'][0]['email']);
        document.getElementById('mail_1').innerHTML = mail1;
        var mail2 = (value['data'][1]['email']);
        document.getElementById('mail_2').innerHTML = mail2;
        var mail3 = (value['data'][2]['email']);
        document.getElementById('mail_3').innerHTML = mail3;
        var mail3 = (value['data'][3]['email']);
        document.getElementById('mail_4').innerHTML = mail3;
        var mail3 = (value['data'][4]['email']);
        document.getElementById('mail_5').innerHTML = mail3;
        var mail3 = (value['data'][5]['email']);
        document.getElementById('mail_6').innerHTML = mail3;
    })
} 