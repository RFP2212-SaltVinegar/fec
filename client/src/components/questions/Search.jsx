import React, {useState} from 'react';

const Search = ({questions}) => {
  const [search, setSearch] = useState('');

  return (
    <div>
      {questions.filter((question) => {
        if (search === '') {
          return question
        } else if (question.title.toLowerCase().includes(search.toLowerCase())) {
          return question
        }
      }).map((question, index) => (
        <QuestionListEntry question={question}
        key={index}
        index={index}
        />
        )
        )}
        </div>
  )
};