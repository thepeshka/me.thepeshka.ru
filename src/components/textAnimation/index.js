import {useState, useEffect} from 'react';

export const TextAnimation = ({rows, onSubmit, setText, onFinish}) => {
    const [currentRowIndex, setCurrentRowIndex] = useState(0);
    const [currentRowCharIndex, setCurrentRowCharIndex] = useState(0);

    const currentRow = rows[currentRowIndex] || null;

    useEffect(() => {
        setInterval(() => setCurrentRowCharIndex(v => ++v), 75);
    }, []);

    useEffect(() => {
        if (currentRow == null) return;
        setText(currentRow.slice(0, currentRowCharIndex + 1));
        if (currentRowCharIndex >= currentRow.length) {
            onSubmit();
            setCurrentRowIndex(v => ++v);
            setCurrentRowCharIndex(0);
        }
    }, [currentRowCharIndex]);

    useEffect(() => {
        if (currentRowIndex >= rows.length )
            onFinish();
    }, [currentRow]);

    return null;
};
