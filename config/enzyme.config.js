import "regenerator-runtime/runtime";
import { configure } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

configure({ adapter: new EnzymeAdapter() });
