import SendbirdApp from '@sendbird/uikit-react/App';

const APP_ID = "YOUR_APP_ID";
const USER_ID = "ID_OF_USER_IN_ABOVE_APP";

export default (props) => {

    const myColorSet = {
        '--sendbird-light-primary-500': '#00487c',
        '--sendbird-light-primary-400': '#4bb3fd',
        '--sendbird-light-primary-300': '#3e6680',
        '--sendbird-light-primary-200': '#0496ff',
        '--sendbird-light-primary-100': '#027bce',
    };
    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <SendbirdApp appId="39BAC4E3-9214-4C95-8F7D-35E6936C65C9"
                userId={props.id}
                showSearchIcon={true}
                // theme="dark"
                colorSet={myColorSet}
            />
        </div>
    )
};