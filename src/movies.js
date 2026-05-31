// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// Iteration 1
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}

// Iteration 2
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    movie =>
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
  ).length;
}

// Iteration 3
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const avg =
    moviesArray.reduce((sum, movie) => {
      return sum + (movie.score || 0);
    }, 0) / moviesArray.length;

  return Number(avg.toFixed(2));
}

// Iteration 4
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie =>
    movie.genre.includes("Drama")
  );

  return scoresAverage(dramaMovies);
}

// Iteration 5
function orderByYear(moviesArray) {
  const copy = [...moviesArray];

  return copy.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }

    return a.year - b.year;
  });
}

// Iteration 6
function orderAlphabetically(moviesArray) {
  return [...moviesArray]
    .sort((a, b) => a.title.localeCompare(b.title))
    .map(movie => movie.title)
    .slice(0, 20);
}

// BONUS Iteration 7
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => {
    const newMovie = { ...movie };

    let hours = 0;
    let minutes = 0;

    const duration = movie.duration;

    if (duration.includes("h")) {
      hours = parseInt(duration.match(/(\d+)h/)[1]);
    }

    const minutesMatch = duration.match(/(\d+)min/);

    if (minutesMatch) {
      minutes = parseInt(minutesMatch[1]);
    }

    newMovie.duration = hours * 60 + minutes;

    return newMovie;
  });
}

// BONUS Iteration 8
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }

  const years = {};

  moviesArray.forEach(movie => {
    if (!years[movie.year]) {
      years[movie.year] = [];
    }

    years[movie.year].push(movie.score);
  });

  let bestYear = 0;
  let bestAvg = 0;

  Object.keys(years).forEach(year => {
    const scores = years[year];

    const avg =
      scores.reduce((sum, score) => sum + score, 0) /
      scores.length;

    if (
      avg > bestAvg ||
      (avg === bestAvg && year < bestYear)
    ) {
      bestAvg = avg;
      bestYear = year;
    }
  });

  return `The best year was ${bestYear} with an average score of ${bestAvg.toFixed(2)}`;
}