import React from 'react';
import AppLike from '@/../tests/AppLike';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Overview } from './index';

describe('Overview', () => {
    const setup = (props) => {
        return render(
            <AppLike>
                <Overview fetchTags={jest.fn()} tags={[]} {...props} />
            </AppLike>,
        );
    };

    const updatedValues = {
        name: 'Updated name',
        description: 'Updated description',
        noradId: '99999',
        tle1: '1 25544U 98067A 20258.44806242 .00000101 00000-0 99675-5 0 1111',
        tle2: '2 25544 51.6438 266.7521 0000903 101.6050 46.0966 15.48946825242222',
        latitude: '22',
        longitude: '9',
        elevation: '999',
    };

    it('renders a generic asset', async () => {
        const asset = {
            id: 'genericasset-id',
            name: 'Generic Asset',
            description: 'Generic Aset Desc',
            type: 'ASSET',
            kind: 'GENERIC',
            tags: [],
        };
        const updateNode = jest.fn();

        const { queryByText, getByText, getByDisplayValue } = setup({
            selectedNode: asset,
            updateNode,
        });

        const name = getByText(asset.name);
        const description = getByText(asset.description);
        expect(name).toBeTruthy();
        expect(description).toBeTruthy();
        expect(queryByText('asset.tabs.overview.noradId')).toBeNull();
        expect(queryByText('asset.tabs.overview.internationalDesignator')).toBeNull();
        expect(queryByText('asset.tabs.overview.tle')).toBeNull();
        expect(queryByText('asset.tabs.overview.latitude')).toBeNull();
        expect(queryByText('asset.tabs.overview.longitude')).toBeNull();
        expect(queryByText('asset.tabs.overview.elevation')).toBeNull();

        fireEvent.click(name);
        const nameInput = getByDisplayValue(asset.name);
        fireEvent.change(nameInput, { target: { value: updatedValues.name } });
        fireEvent.click(getByText('generic.save'));

        await waitFor(() =>
            expect(updateNode).toHaveBeenCalledWith(
                asset.id,
                expect.objectContaining({
                    name: updatedValues.name,
                    description: asset.description,
                }),
            ),
        );

        fireEvent.click(description);
        const descriptionInput = getByDisplayValue(asset.description);
        fireEvent.change(descriptionInput, { target: { value: updatedValues.description } });
        fireEvent.click(getByText('generic.save'));

        await waitFor(() =>
            expect(updateNode).toHaveBeenCalledWith(
                asset.id,
                expect.objectContaining({
                    name: asset.name,
                    description: updatedValues.description,
                }),
            ),
        );
    });

    it('renders a groundstation asset', async () => {
        const asset = {
            id: 'groundtsation-id',
            name: 'GroundStation',
            description: 'Ground Station Desc',
            type: 'ASSET',
            kind: 'GROUND_STATION',
            latitude: '11',
            longitude: '111',
            elevation: '111111',
            tags: [],
        };
        const updateNode = jest.fn();
        const { getByText, getByDisplayValue } = setup({
            selectedNode: asset,
            updateNode,
        });

        const latitude = getByText(asset.latitude);
        const longitude = getByText(asset.longitude);
        const elevation = getByText(asset.elevation);
        expect(latitude).toBeTruthy();
        expect(longitude).toBeTruthy();
        expect(elevation).toBeTruthy();

        fireEvent.click(latitude);
        const latitudeInput = getByDisplayValue(asset.latitude);
        fireEvent.change(latitudeInput, { target: { value: updatedValues.latitude } });
        fireEvent.submit(latitudeInput.form);

        await waitFor(() =>
            expect(updateNode).toHaveBeenCalledWith(
                asset.id,
                expect.objectContaining({
                    name: asset.name,
                    description: asset.description,
                    latitude: updatedValues.latitude,
                    longitude: asset.longitude,
                    elevation: asset.elevation,
                }),
            ),
        );
    });

    it('renders a satellite asset', async () => {
        const asset = {
            id: 'satellite-id',
            name: 'Satellite 1',
            description: 'GSU',
            type: 'ASSET',
            kind: 'SATELLITE',
            noradId: '12345',
            internationalDesignator: '55555GSU',
            tle: [
                '1 25544U 98067A 20258.44806242 .00000101 00000-0 99675-5 0 9990',
                '2 25544 51.6438 266.7521 0000903 101.6050 46.0966 15.48946825245850',
            ],
            tags: [],
        };
        const updateNode = jest.fn();
        const { getByText, getByDisplayValue } = setup({
            selectedNode: asset,
            updateNode,
        });

        const name = getByText(asset.name);
        const description = getByText(asset.description);
        const noradId = getByText(asset.noradId);
        const designator = getByText(asset.internationalDesignator);
        const tle1 = getByText(asset.tle[0]);

        expect(name).toBeTruthy();
        expect(description).toBeTruthy();
        expect(noradId).toBeTruthy();
        expect(designator).toBeTruthy();
        expect(tle1).toBeTruthy();
        expect(getByText(asset.tle[1])).toBeTruthy();

        fireEvent.click(name);
        const nameInput = getByDisplayValue(asset.name);
        fireEvent.change(nameInput, { target: { value: updatedValues.name } });
        fireEvent.submit(nameInput.form);

        await waitFor(() =>
            expect(updateNode).toHaveBeenCalledWith(
                asset.id,
                expect.objectContaining({
                    name: updatedValues.name,
                    description: asset.description,
                    noradId: asset.noradId,
                }),
            ),
        );

        fireEvent.click(description);
        const descriptionInput = getByDisplayValue(asset.description);
        fireEvent.change(descriptionInput, { target: { value: updatedValues.description } });
        fireEvent.submit(descriptionInput.form);

        await waitFor(() =>
            expect(updateNode).toHaveBeenCalledWith(
                asset.id,
                expect.objectContaining({
                    name: asset.name,
                    description: updatedValues.description,
                    noradId: asset.noradId,
                }),
            ),
        );

        fireEvent.click(noradId);
        const noradInput = getByDisplayValue(asset.noradId);
        fireEvent.change(noradInput, { target: { value: updatedValues.noradId } });
        fireEvent.submit(noradInput.form);

        await waitFor(() =>
            expect(updateNode).toHaveBeenCalledWith(
                asset.id,
                expect.objectContaining({
                    name: asset.name,
                    description: asset.description,
                    noradId: updatedValues.noradId,
                }),
            ),
        );

        fireEvent.click(tle1);
        const firstTLE = getByDisplayValue(asset.tle[0]);
        fireEvent.change(firstTLE, { target: { value: updatedValues.tle1 } });
        const secondTLE = getByDisplayValue(asset.tle[1]);
        fireEvent.change(secondTLE, { target: { value: updatedValues.tle2 } });
        fireEvent.submit(firstTLE.form);

        await waitFor(() =>
            expect(updateNode).toHaveBeenCalledWith(
                asset.id,
                expect.objectContaining({
                    name: asset.name,
                    description: asset.description,
                    noradId: asset.noradId,
                    tle: [updatedValues.tle1, updatedValues.tle2],
                }),
            ),
        );

        // erasing infos
        fireEvent.click(designator);
        const designatorInput = getByDisplayValue(asset.internationalDesignator);
        fireEvent.change(designatorInput, { target: { value: '' } });
        fireEvent.submit(designatorInput.form);

        await waitFor(() =>
            expect(updateNode).toHaveBeenCalledWith(
                asset.id,
                expect.objectContaining({
                    name: asset.name,
                    description: asset.description,
                    noradId: asset.noradId,
                    internationalDesignator: null,
                }),
            ),
        );
    });
});