import { BookingsystemModule } from './bookingsystem.module';

describe('BookingsystemModule', () => {
  let bookingsystemModule: BookingsystemModule;

  beforeEach(() => {
    bookingsystemModule = new BookingsystemModule();
  });

  it('should create an instance', () => {
    expect(bookingsystemModule).toBeTruthy();
  });
});
