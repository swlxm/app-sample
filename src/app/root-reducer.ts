
import combineSectionReducers from "combine-section-reducers";
import { home } from "../services/home/reducer";

const rootReducer = combineSectionReducers({
  home,
});

export default rootReducer;
export type IRootState = ReturnType<typeof rootReducer>;
