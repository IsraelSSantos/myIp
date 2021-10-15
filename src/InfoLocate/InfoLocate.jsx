import './infoLocate.scss';
import React from 'react'
import Card from './Card'
import { border } from '@mui/system';

let InfoLocate = () => {
    return (<>
        <div className="infoLocate">
            <Card
                title="IP ADRESS"
                content="192.168.10.8"
                style={{ border: "0" }}
                h2={{ wordBreak: 'keep-all' }}
                id={1}
            />
            <Card
                title="LOCATION"
                content="1212121212"
                h2={{ wordBreak: 'break-word' }}
                id={2}
            />
            <Card
                title="TIMEZONE"
                content="123123123"
                h2={{ wordBreak: 'keep-all' }}
                id={3}
            />
            <Card
                title="ISP"
                content="12312312"
                h2={{ wordBreak: 'break-word' }}
                id={4}
            />
        </div>
    </>);
}

export default InfoLocate;