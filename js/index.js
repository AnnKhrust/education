//получение данных от пользователя и сохранение в массив

// const answers = [];

// answers[0] = prompt('Как вас зовут?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers);

// общение с юзером

// const user = 'Name';

// alert(`Hello, ${user}`);

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

alert(`${numberOfFilms} фильма`);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genges: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''), 
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
