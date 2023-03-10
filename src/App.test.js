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
  it('should return an array of available booking times for the current date', () => {
    const state = [];
    const action = { type: 'INITIALIZE_TIMES' };
    const result = initializeTimes(state, action);
    expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  });
});

// describe('initializeTimes', () => {
//   it('should return the correct initial state', () => {
//     const expected = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
//     const result = initializeTimes("2023-02-09");
//     expect(result).toEqual(expected);
//   });
// });

// describe('updateTimes', () => {
//   it('should return the same state that is provided', () => {
//     const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
//     const action = { type: 'SOME_ACTION', payload: 'SOME_PAYLOAD' };
//     const result = updateTimes(state, action);
//     expect(result).toEqual(state);
//   });
// });

describe('updateTimes', () => {
  it('should return an array of available booking times for a selected date', () => {
    const state = [];
    const action = { type: 'UPDATE_TIMES', payload: '09-02-2023' };
    const result = updateTimes(state, action);
    expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  });
});

describe("Booking form", () => {
  it("should display the correct HTML5 validation attributes", () => {
    const { getByLabelText } = render(<BookingForm />);

    const dateField = getByLabelText("Choose date");
    expect(dateField).toHaveAttribute("type", "date");
    expect(dateField).toHaveAttribute("required");

    const timeField = getByLabelText("Choose time");
    expect(timeField).toHaveAttribute("type", "time");
    expect(timeField).toHaveAttribute("required");

    const guestsField = getByLabelText("Number of Guests");
    expect(guestsField).toHaveAttribute("type", "number");
    expect(guestsField).toHaveAttribute("required");

    const occasionField = getByLabelText("Occasion");
    expect(occasionField).toHaveAttribute("type", "text");
    expect(occasionField).toHaveAttribute("required");
  }
)})