import { NgxTripleSspComponent } from './ngx-triple-ssp.component';

class MockComponent extends NgxTripleSspComponent<number> {
  constructor() {
    super(0);
  }

  public override setLoading(loading: boolean): void {
    super.setLoading(loading);
  }

  public override setError(error: any): void {
    super.setError(error);
  }

  public override setData(data: number): void {
    super.setData(data);
  }

  updateUI(): void {}
}

describe('NgxTripleSspComponent', () => {
  let component: MockComponent;

  beforeEach(() => {
    component = new MockComponent();
    spyOn(component, 'updateUI');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.data).toEqual(0);
  });

  it('should set loading', () => {
    component.setLoading(true);
    expect(component.loading).toBeTrue();
    expect(component.updateUI).toHaveBeenCalled();
  });

  it('should set error', () => {
    const error = new Error('An error occurred');
    component.setError(error);
    expect(component.error).toBe(error);
    expect(component.updateUI).toHaveBeenCalled();
  });

  it('should set data', () => {
    component.setData(123);
    expect(component.data).toEqual(123);
    expect(component.updateUI).toHaveBeenCalled();
  });
});
