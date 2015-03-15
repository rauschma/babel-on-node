jest.autoMockOff();
import { Point } from '../point';

describe('Point', () => {
    it('sets up instance properties correctly', () => {
        let p = new Point(1, 5);
        console.log(JSON.stringify(p));
        expect(p.x).toBe(1);
        expect(p.y).toBe(5);
    });
});
