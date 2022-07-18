import {
    _saveQuestion,
  } from './utils/_DATA.js'

describe('_saveQuestion',()=>{
    it('Will verify saved question is returned and all expected fields are populated', async()=>{
        const fields={
            optionOneText:'Java',
            optionTwoText:'Javascript',
            author: 'sarahedo',
        }

        var result=await _saveQuestion(fields);
        expect(result.optionOne.text).toEqual(fields.optionOneText);
        expect(result.optionTwo.text).toEqual(fields.optionTwoText);
        expect(result.author).toEqual(fields.author);
    })

    it('Will verify if incorrect data is passed', async()=>{
        const fields={
            optionOneText:'',
            optionTwoText:'Javascript',
            author: 'sarahedo',
        }

        await expect(_saveQuestion(fields)).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');

    })    
})