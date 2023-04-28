import { FC, PropsWithChildren } from 'react';


export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.8)',
        borderRadius: '5px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px',
        color: 'white',
    }}>
        <h3>Dark Layout</h3>
        { children }
    </div>
  )
}
