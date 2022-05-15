import React from 'react';
import Button from '../button';
import { Download } from './config/versions';

interface DownloadGroupProps extends Download {
  disabled?: boolean;
}

const DownloadGroup = ({
  name,
  version,
  description,
  variants: { fl, ov, ovp },
  disabled,
}: DownloadGroupProps) => {
  let classForButton = ovp === undefined ? 'basis-1/2' : 'basis-1/3';
  classForButton += disabled ? ' cursor-default' : ' cursor-pointer';
  return (
    <div className="mb-16">
      <h2 className="text-4xl font-bold text-gold-400 [text-shadow:4px_4px_0_#441a08]">
        {`${version} - ${name}`}
      </h2>
      {description ? (
        <p className="text-2xl [text-shadow:4px_4px_0_#441a08] text-white">{description}</p>
      ) : (
        ''
      )}
      <div className="flex flex-row w-full gap-8 mt-4 text-2xl">
        <a href={fl} download className={classForButton}>
          <Button className="w-full" disabled={disabled}>{`${version} Full`}</Button>
        </a>
        {ovp === undefined ? (
          ''
        ) : (
          <a href={ovp} download className={classForButton}>
            <Button className="w-full" disabled={disabled}>
              {`${version} Overlay`}
              <span className="ml-1 font-bold text-lilac-400">+</span>
            </Button>
          </a>
        )}
        <a href={ov} download className={classForButton}>
          <Button className="w-full" disabled={disabled}>{`${version} Overlay`}</Button>
        </a>
      </div>
    </div>
  );
};

DownloadGroup.defaultProps = {
  disabled: false,
};

export default DownloadGroup;
