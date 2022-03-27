import axios from 'axios';
const SetCity = () => {
    const setCookie = (e) => {
        e.preventDefault();
        let city = e.target.city.value;
        axios
            .get(`/cookie/setcookie/city/${city}`)
            .then((res) => console.log(res))
            .catch((e) => console.log(e));
    };
    return (
        <div>
            <form onSubmit={setCookie} className='form-group myformCookies'>
                <label>
                    <h5>City </h5>
                </label>
                <input
                    type='text'
                    name='city'
                    placeholder='city..'
                    required
                    className='form-control'
                />
                <div className='text-center mt-2'>
                    <button className='btn btn-primary'>add cookie</button>
                </div>
            </form>
        </div>
    );
};
export default SetCity;
