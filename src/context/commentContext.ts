import React from 'react';

type CommentContexttype = {
    value: string;
    onChange: (value: string) => void;
}

export const commentContext = React.createContext<CommentContexttype>({
    value: '',
    onChange: () => {},
})