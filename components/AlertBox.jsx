import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { disappearAnim } from './styles/animations';
import { colors, introduce } from './styles/constants';

const AlertSection = styled.div`
    width: 100%;
    max-width: 2000px;
    display: flex;
    position: fixed;
    z-index: 99;
    pointer-events: none;
    top: 0;
`;

const AlertBoxWrapper = styled.div`
    transition: all 0.2s ease;
    padding-top: 1rem;
`;

const AlertContainer = styled.div`
    background-color: ${props => props.type && props.type === 'success' ? colors.success : 'grey'};
    color: black;
    min-width: 25ch;
    font-size: 0.9rem;
    padding: 0.7rem;
    border-radius: 0.25rem;
    pointer-events: none;
    margin-bottom: 0.4rem;
    animation-name: ${disappearAnim};
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.1, -0.6, 0.5, 0);
`;

const AlertBox = ({ alertBox }) => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        if (!alertBox.text) return;
        if (alerts.findIndex(e => e.id === alertBox.id) === -1) {
            const updatedAlerts = alerts;
            if (updatedAlerts.length > 3) {
                updatedAlerts.shift()
            }
            setAlerts([...updatedAlerts, alertBox]);
        }
    }, [alertBox]);

    const removeAlert = id => {
        const updatedAlerts = alerts.filter(e => e.id !== id);
        setAlerts([...updatedAlerts]);
    }

    return (
        <AlertSection>
            <AlertBoxWrapper>
                {
                    alerts.map(e => (
                        <AlertContainer type={e.type} onAnimationEnd={() => removeAlert(e.id)} key={e.id}>
                            {e.text}
                        </AlertContainer>)
                    )
                }
            </AlertBoxWrapper>
        </AlertSection>
    );
}

export default AlertBox;
