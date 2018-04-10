import { shallow } from "@vue/test-utils";
import Header from '@/components/Header.vue'
import * as all from "../unit/setup.js";

describe("Header.vue", () => {
    it("has the expected html structure", () => {
        const wrapper = shallow(Header);
        expect(wrapper.element).toMatchSnapshot();
    })
})