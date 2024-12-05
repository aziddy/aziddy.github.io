function BackButton() {
    const handleBack = () => {
        window.location.href = '../';
    };

    const buttonStyle = {
        padding: '8px 16px',
        margin: '5px',
        cursor: 'pointer', 
        display: 'flex',
        alignItems: 'center',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#f0f0f0',
        transition: 'background-color 0.2s',
        '&:hover': {
            backgroundColor: '#333333'
        }
    };



    return (
        <button onClick={handleBack} style={{...buttonStyle}}>
            <svg width="24" height="24" viewBox="0 0 24 24" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="currentColor"/>
            </svg>
            <span style={{verticalAlign: 'middle'}}>Back</span>
        </button>
    );
}
