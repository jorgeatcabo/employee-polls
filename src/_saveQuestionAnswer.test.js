import {
    _saveQuestionAnswer,
  } from './utils/_DATA.js'

describe('_saveQuestionAnswer',()=>{


    it('Will verify true is returned when correct data is passed', async()=>{
        const fields={
            authedUser:'sarahedo',
            qid:'8xf0y6ziyjabvozdd253nd',
            answer: 'optionOne',
        }

        await expect(_saveQuestionAnswer(fields)).resolves.toBe(true);

    })    

    it('Will verify if incorrect data is passed', async()=>{
        const fields={
            authedUser:'',
            qid:'8xf0y6ziyjabvozdd253nd',
            answer: 'optionOne',
        }

        await expect(_saveQuestionAnswer(fields)).rejects.toEqual('Please provide authedUser, qid, and answer');

    })    


})