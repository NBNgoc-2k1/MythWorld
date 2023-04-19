import React, { useEffect, useState } from 'react'
import { Alert, Avatar, TextField } from '@mui/material';
import AppButton from '../../../global_component/AppButton';
import isEmail from 'validator/lib/isEmail';
import { updateEmail, updateProfile } from '@firebase/auth';
import { authentication } from '../../../firebase-config';
import { UpdateData } from '../../../api/CRUD_API';
import RequiredAuth from '../../requiredAuth/screens/RequiredAuth';

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

const UpdateUserInfo = (currentUser, email, fullName, address, phoneNumber, setFill) => {
    if (!isEmail(email) || fullName === '' || address === '' || phoneNumber === '') {
        setFill(false)
        return
    }
    var updateUser = {
        ...currentUser, 'userEmail': email,
        'fullName': fullName,
        'address':address,
        'phoneNumber':phoneNumber,
    }
    updateEmail(authentication.currentUser, updateUser.userEmail).then(async () => {
        UpdateData(currentUser.uid, 'users', updateUser).then(() => {
            updateProfile(authentication.currentUser, {
                displayName: `${updateUser.fullName}`,
            }).then(() => {
                localStorage.setItem('currentUser', JSON.stringify(updateUser))
                window.location.reload()
            })
        })
    })


}

const UserProfilePage = (props) => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    const [isFilled, setFilled] = useState(true)

    const SetUserInfo = () => {
        setEmail(props.user.userEmail)
        setFullName(props.user.fullName)
    }

    useEffect(() => {
        if (props.user) {
            SetUserInfo()
        }
    }, [])

    return (
        <>
            {props.user ? (
                <>
                    {!isFilled && <Alert severity="warning" className="w-4/5 sm:w-2/5 mt-4 ml-4">
                        Please don't empty any information field !!! Thank you
                    </Alert>}
                    <div className="flex flex-col items-center justify-center my-12">
                        <p className="text-brown text-4xl lg:text-5xl">Account Settings</p>
                        <div className="rounded-3xl w-80 my-6 pb-6 bg-dark-silver flex flex-col items-center justify-center
                            sm:w-96
                        ">
                            <Avatar {...stringAvatar(`${props.user.fullName}`)} className='my-3' />
                            <TextField
                                id="outlined-fullName-input"
                                label="Full name"
                                type="text"
                                size="small"
                                onChange={(event) => setFullName(event.target.value)}
                                margin="normal"
                                value={fullName}
                                variant="standard"
                                inputProps={{ style: { fontSize: 20 } }}
                                InputLabelProps={{ style: { fontSize: 20 } }}

                            />
                            <TextField
                                id="outlined-email-input"
                                label="Email"
                                type="email"
                                size="small"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                margin="normal"
                                
                                variant="standard"
                                inputProps={{ style: { fontSize: 20 } }}
                                InputLabelProps={{ style: { fontSize: 20 } }}

                            />
                            <TextField
                                id="outlined-phone-input"
                                label="Phone number"
                                type="tel"
                                InputProps={{
                                    readOnly: true,
                                }}
                                margin='normal'
                                size="small"
                                inputProps={{ style: { fontSize: 20 } }}
                                InputLabelProps={{ style: { fontSize: 20 } }}
                                variant="standard"
                                onChange={(event) => setPhoneNumber(event.target.value)}
                                value={phoneNumber}

                            />
                            <TextField
                                id="outlined-address-input"
                                label="Address"
                                InputProps={{
                                    readOnly: true,
                                }}
                                type="text"
                                size="small"
                                margin='normal'
                                inputProps={{ style: { fontSize: 20 } }}
                                InputLabelProps={{ style: { fontSize: 20 } }}
                                variant="standard"
                                onChange={(event) => setAddress(event.target.value)}
                                value={address}

                            />
                        </div>
                        <AppButton content="save changes" onClick={() => {
                            UpdateUserInfo(currentUser, email, fullName, address, phoneNumber, setFilled)
                        }} />
                    </div>
                </>
            ) : (
                <RequiredAuth />
            )}
        </>
    )
}

export default UserProfilePage
