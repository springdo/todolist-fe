import { shallow } from "@vue/test-utils";
import ComponentView from "@/views/ComponentView.vue";
import * as all from "../unit/setup.js";

describe("ComponentView.vue", () => {
  it("should render like the snapshot", () => {
    const wrapper = shallow(ComponentView);
    expect(wrapper.element).toMatchSnapshot();
  });
});
