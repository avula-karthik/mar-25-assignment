import axios from 'axios';
const SetCookieNameValueTime = () => {
    const setCookie = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let value = e.target.value.value;
        let time = e.target.time.value;
        axios
            .get(`/cookie/setcookie/${name}/${value}/${time}`)
            .then((res) => console.log(res))
            .catch((e) => console.log(e));
    };
    return (
        <div>
            <form onSubmit={setCookie} className='form-group myformCookies'>
                <label>
                    <h5>Name </h5>
                </label>
                <input
                    required
                    type='text'
                    placeholder='name..'
                    name='name'
                    className='form-control'
                />
                <br />
                <label>
                    <h5>Value</h5>
                </label>
                <input
                    required
                    type='text'
                    placeholder='value..'
                    name='value'
                    className='form-control'
                />
                <br />
                <label>
                    <h5>time(in min)</h5>
                </label>
                <input
                    required
                    type='number'
                    placeholder='time..'
                    name='time'
                    className='form-control'
                />
                <div className='text-center mt-2'>
                    <button className='btn btn-primary'>Add Cookie</button>
                </div>
            </form>
        </div>
    );
};
export default SetCookieNameValueTime;
