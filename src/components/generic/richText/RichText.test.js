import { shallowMount } from '@vue/test-utils';
import RichText from './RichText.vue';

const articleStub = {
    "data": {},
    "content": [{
        "data": {},
        "content": [{
            "data": {},
            "marks": [],
            "value": "Dignissimos ducimus qui",
            "nodeType": "text"
        }],
        "nodeType": "heading-2"
    }, {
        "data": {},
        "content": [{
            "data": {},
            "marks": [],
            "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            "nodeType": "text"
        }],
        "nodeType": "paragraph"
    }, {
        "data": {},
        "content": [{
            "data": {},
            "marks": [],
            "value": "At vero eos el accusamus et iusto odio dignissimos ducimus qui blanditiis.",
            "nodeType": "text"
        }],
        "nodeType": "paragraph"
    }],
    "nodeType": "document"
}

describe('RichText.vue', () => {
    it('renders component', () => {
        const richTextStub = jest.fn();
        const wrapper = shallowMount(RichText, {
            propsData: {
                article: articleStub
            },
            methods: { richtextToHTML: richTextStub },
        });

        expect(wrapper.isVueInstance()).toBeTruthy();
        expect(wrapper.contains('article')).toBe(true);
        expect(wrapper.classes('mdc-typography')).toBe(true);
        expect(wrapper.classes('mdc-typography--body1')).toBe(true);
        expect(richTextStub).toHaveBeenCalledTimes(1);
    });

    it('renders heading', () => {
        const BLOCKS = {
            renderNode: {
                'heading-1': Function,
                'heading-2': Function
            }
        }
        const wrapper = shallowMount(RichText, {
            propsData: {
                article: articleStub,
                mocks: {
                    BLOCKS
                }
            },
        });

        expect(wrapper.contains('h2')).toBe(true);
        expect(wrapper.find('h2').classes('mdc-typography--headline2')).toBe(true);
        // expect(wrapper.vm.options).toBe(BLOCKS);
    });
});
