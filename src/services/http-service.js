class HttpService {
    getBackground = () => {
        let ids = ['9Y5Wk7favpE', 'Y-MGVIkpyFw', 'dVFiG8RL99E', 'Defzr230Q7I', 'i2KibvLYjqk', '2XfDYMK9cSE', '1JHzqk5oTy8', 'Jztmx9yqjBw', 'eKU3JGNCCMg', 'xJ2tjuUHD9M', 'upXoQv5GAr8'];

        let rand = Math.floor(Math.random() * ids.length);
        let url = `https://api.unsplash.com/photos/${ids[rand]}?client_id=ce0d2b91f80997b29e018168547a51b22b3bbaecc8ba637c651faece4d55c0d9`;

        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => {
                    if (response.status !== 200) {
                        reject('Something went wrong. :(');
                    }
                    response.json().then(data => {
                        let background = {
                            img: data.urls.regular,
                            name: data.user.name,
                            link: data.user.links.html
                        }
                        resolve(background)
                });
            });
        });
    }
}

export default HttpService;