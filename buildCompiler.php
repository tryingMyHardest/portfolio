<script>
    import axios from "axios";

    const options = {
    method: 'GET',
    url: 'https://judge0-ce.p.rapidapi.com/about',
    headers: {
        'X-RapidAPI-Key': '0f362b5a43msh406f5870c7e287ep11dc52jsnc6ef63ed4990',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
    }
    };

    axios.request(options).then(function (response) {
	    console.log(response.data);
    }).catch(function (error) {
	    console.error(error);
    });
</script>