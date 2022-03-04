import { useState, useEffect } from 'react';
import FormLayout from '../Layout/FormLayout';

import { ValidateEmail, ValidatePassword } from '../helper/helpers';

const initialState = {
  'emailId': '',
  'password': '',
  'firstName': '',
  'lastName': '',
  'address': '',
  'countryCode': '',
  'phoneNumber': '',
};

const FormModule = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error1, setError1] = useState();
  const [error2, setError2] = useState();
  const [formNumber, setFormNumber] = useState(1);
  const [formdata, setFormData] = useState(initialState);

  const onNextHandler1 = e => {
    e.preventDefault();
    if (!ValidateEmail(email)) {
      setError1('Invalid Email');
      return;
    }

    if (!ValidatePassword(password)) {
      setError2('Invalid Passsword');
    } else {
      setFormNumber(prev => prev + 1);
      const temp = formdata;
      temp.emailId = email;
      temp.password = password;
      setFormData({ ...temp });
    }
  };

  const onNextHandler2 = e => {
   
  };

  return (
    <>
      <div className="w-full max-w-xs">
        <form>
          {formNumber === 1 && (
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Enter Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder=""
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />
                {error1}
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Enter Password
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder=""
                  name="password"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              {error2}
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={onNextHandler1}
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {formNumber === 2 && (
            sdf
          )}
        </form>
      </div>
    </>
  );
};

export default FormModule;
