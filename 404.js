let api_req = 'https://api.giphy.com/v1/gifs/random?api_key=Ky9BnCVZJEm66SHxzCbdaipXuFpFPykF&tag=&rating=G';
                        let respObj;
                        let x = 1;
                        let xhttp = new XMLHttpRequest();
                        xhttp.open("GET", api_req);
                        xhttp.send();
                        console.log(xhttp.responseText);
                        xhttp.onreadystatechange=(e)=>{
                                respObj = JSON.parse(xhttp.responseText);
                                if (respObj && x == 1){
                                x += 1;
                                console.log(respObj.data.embed_url);
                                //document.getElementById('giphy').html("<embed src="+respObj.data.embed_url+" width='500' height='500' >");
                                let embedTag = document.createElement('embed');
                                embedTag.setAttribute('src', respObj.data.embed_url);
                                embedTag.setAttribute('height', '500');
                                embedTag.setAttribute('width', '500');  
                                console.log(x);
                                document.getElementById('giphy').appendChild(embedTag);}
                        
                        }

