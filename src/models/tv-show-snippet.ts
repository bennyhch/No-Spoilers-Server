import mongoose from '.';

const tvShowSnippetSchema = new mongoose.Schema<TVShowSnippet>({
  name: String,
  searchable: String,
  TMDB_show_id: Number,
  poster_path: String,
  first_air_date: String,
});

const TVShowSnippet = mongoose.model<TVShowSnippet>(
  'TVShowSnippet',
  tvShowSnippetSchema
);

export default TVShowSnippet;
