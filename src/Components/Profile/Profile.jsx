import React from 'react'

export default function Profile(params) {
    return (
        <div className='form-wrapper'>
            <h1 className='form-title'>Профиль</h1>
            <div className='form-desc'>Ввдеите платежные данные</div>
            <form className='form-profile'>
                <div className='form-profile form-profile__items items'>
                <div className='item-left'>
                    <div className='label-wrap'>
                        <label htmlFor='userName' className='form-label'>Имя владельца</label>
                        <input id='userName' type='name' name='userName' className='form-input'/>
                    </div>
                    <div className='label-wrap'>
                        <label htmlFor='userCard' className='form-label'>Номер карты</label>
                        <input id='userCard' type='' name='userCard' className='form-input'/>
                    </div>
                    <div>
                    <div className='label-wrap label-wrap__inline'>
                        <div className='label-wrap label-wrap__mr'>
                            <label htmlFor='cardDate' className='form-label'>MM/YY</label>
                            <input id='cardDate' type='text' name='cardDate' className='form-input'/>
                        </div>
                        <div className='label-wrap'>
                            <label htmlFor='cardCVC' className='form-label'>CVC</label>
                            <input id='cardCVC' type='text' name='cardCVC' className='form-input'/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='item-right'>
                    <div className='cardView'>
                        <div>
                            <input/>
                        </div>
                        <input/>
                        <div>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>
                        


                    </div>


                </div>
                </div>
                
                
                <button type='submit' className='form-btn' >Сохранить</button>
            </form>
        </div>
    )
};

