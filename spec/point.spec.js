jest.autoMockOff();
import { Point } from '../point';

describe('Point', function() {
    it('sets up instance properties correctly', function() {
        let p = new Point(1, 5);
        console.log(JSON.stringify(p));
        expect(p.x).toBe(1);
        expect(p.y).toBe(5);
    });
});
