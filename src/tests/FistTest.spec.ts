import { User } from '@models/User';

test('it should be ok', () => {
    const user = new User();

    user.name = "Douglas Held Pacito";

    expect(user.name).toEqual('Douglas Held Pacito')
})