import ZenRoute from 'routes/Zen';

describe('(Route) Zen', () => {

  let _route

  beforeEach(() => {
    _route = ZenRoute({});
  });

  it('Should return a route configuration object', () => {
    expect(typeof(_route)).to.equal('object');
  });

  it('Should have the path "zen"', () => {
    expect(_route.path).to.equal('zen');
  });

})
