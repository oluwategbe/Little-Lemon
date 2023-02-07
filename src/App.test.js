import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm/BookingForm';
import BookingPage from './components/BookingPage';
import { initializeTimes, updateTimes } from "./components/BookingPage";

test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Book now");
    expect(headingElement).toBeInTheDocument();
})

describe('initializeTimes', () => {
  it('should return the correct initial state', () => {
    const expected = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const result = initializeTimes("2023-02-09");
    expect(result).toEqual(expected);
  });
});

describe('updateTimes', () => {
  it('should return the same state that is provided', () => {
    const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const action = { type: 'SOME_ACTION', payload: 'SOME_PAYLOAD' };
    const result = updateTimes(state, action);
    expect(result).toEqual(state);
  });
});