function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComment() {
    return {
        id: 3,
        message: 'top',
        user: {
            avatar: './picture/3.avatar',
            name: 'user333',
        }
    }
}

const maxComments = 15;

function getPicture() {
    const comments = [];

    let i = 1;
    let randomComments = getRandomInt(1, maxComments) 

    while (i <= randomComments) {
        comments.push(getComment());
        i++;
    }

    const picture = {
        id: getRandomInt(1, 1000),
        url: `./photos/${getRandomInt(1, 25)}.jpg`,
        description: '3/10',
        comments: comments,
        likes: getRandomInt(15, 200)
    };

    return picture;
}

function getPictures(num) {
    const pictures = [];
    let i = 1;
    
    while (i <= num) {
        pictures.push(getPicture(num));    
        i++;
    }

    return pictures;
}

export {getPictures};

// console.log(getPictures(6));

// renderPicturesList(getPictures(66));
