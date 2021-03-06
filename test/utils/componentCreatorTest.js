/**
 *  Copyright 2016 ReSys OÜ
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
import {componentCreator} from 'utils/componentCreator';
import Immutable from 'immutable';
import { shallow, mount } from 'enzyme';
import TextQuestion from 'components/TextQuestion';

describe('componentCreator', () => {
  it('should return null on null input', () => {
    var component = componentCreator(null);
    expect(component).to.equal(null);
  });
  it('TODO',()=>{
    let question = {
        id: 'q',
        type: 'text',
        label: 'Question to you',
        className: []
    };
    let context = {
        store: {
            getState: sinon.stub(),
            subscribe: sinon.spy(),
            dispatch: sinon.spy()
        }
    };
    var component = componentCreator([question.id,Immutable.fromJS(question)]);
    var wrapper = shallow(component,{context});
    expect(wrapper.html()).to.equal('<div class="ff-item ff-itemtype-text "><label for="q">Question to you</label><input type="text" name="q"/></div>');
  });
});
