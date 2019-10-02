import { storiesOf } from '@storybook/vue';
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

storiesOf('Rich Text', module)
    .add('article', () => ({
        components: { RichText },
        data() {
            return {
                article: articleStub,
            }
        },
        template: `<div class="mdc-layout-grid">
        <RichText :article="article"/>
      </div>`
    }));