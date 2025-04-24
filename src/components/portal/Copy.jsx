import {useState} from 'react';
import PopUp from './PopUp';

const Copy = () => {

    const [input, setInput] = useState('');
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(input)
            .then(() => {
                setCopied(true);

                setTimeout(() => {
                    setCopied(false);
                }, 10000);

            })
    }

    return (
        <div>
            <input type="text" name="text" id="text" value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={handleCopy}>Copy</button>
            <PopUp copied={copied} />
        </div>
    )
}

export default Copy;