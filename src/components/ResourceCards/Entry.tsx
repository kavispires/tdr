import { FireFilled } from '@ant-design/icons';
import { Flex, Tag } from 'antd';
import { ReactNode } from 'react';

type LabelProps = {
  children: ReactNode;
};

export function Label({ children }: LabelProps) {
  return <Tag>{children}</Tag>;
}

export function Value({ children }: LabelProps) {
  return <span>{children}</span>;
}

type EntryProps = {
  label: string;
  children: ReactNode;
};

export function Entry({ label, children }: EntryProps) {
  return (
    <Flex>
      <div>
        <Label>{label}</Label>
      </div>
      <Value>{children}</Value>
    </Flex>
  );
}

export function EntryList({ label, children }: EntryProps) {
  return (
    <Flex>
      <div>
        <Label>{label}</Label>
      </div>
      <ul className="resource-card__list">{children}</ul>
    </Flex>
  );
}

export function EntryListItem({ children }: LabelProps) {
  return <li>{children}</li>;
}

function BrazilFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 335.4" {...props}>
      <path
        fill="#73af00"
        d="M473.6 0H38.3A38.3 38.3 0 000 38.3v258.8a38.4 38.4 0 0038.4 38.4h435.3A38.4 38.4 0 00512 297V38.3A38.3 38.3 0 00473.6 0z"
      ></path>
      <path
        fill="#ffe15a"
        d="M251.4 47l-186 113.2a8.8 8.8 0 000 15l186 113.3a8.8 8.8 0 009.2 0l186-113.2a8.8 8.8 0 000-15.1l-186-113.3a8.8 8.8 0 00-9.2 0z"
      ></path>
      <circle cx="256" cy="167.7" r="70.6" fill="#41479b"></circle>
      <path
        fill="#f5f5f5"
        d="M195.4 131.6a70.2 70.2 0 00-7.6 18.1c39.1-3 97 8 134 43.8a70.4 70.4 0 004.5-19.5c-38-32.1-90.7-43.5-130.9-42.4zm63.6 60.2l1.8 5.7h6a.8.8 0 01.4 1.4l-4.8 3.5 1.8 5.7a.8.8 0 01-1.2.9l-4.8-3.5-4.9 3.5a.8.8 0 01-1.2-.9l1.8-5.7-4.8-3.5a.8.8 0 01.5-1.4h6l1.8-5.7a.8.8 0 011.5 0zm23 14.6l.8 2.4h2.6a.3.3 0 01.2.7l-2 1.5.7 2.4a.3.3 0 01-.5.4l-2.1-1.5-2.1 1.5a.3.3 0 01-.5-.4l.7-2.4-2-1.5a.3.3 0 01.2-.7h2.5l.9-2.4a.3.3 0 01.6 0zm-33-25.3l.7 2.4h2.6a.3.3 0 01.2.7l-2 1.5.7 2.5a.3.3 0 01-.5.3l-2-1.5-2.2 1.5a.3.3 0 01-.5-.4l.8-2.4-2-1.5a.3.3 0 01.1-.6h2.6l.8-2.5a.3.3 0 01.6 0zm-44.9-2.9l.8 2.4h2.6a.3.3 0 01.2.6l-2 1.5.7 2.5a.3.3 0 01-.5.4l-2.1-1.5-2 1.4a.3.3 0 01-.6-.3l.8-2.5-2-1.5a.3.3 0 01.1-.6h2.6l.8-2.4a.3.3 0 01.6 0zm37.5 27.4l.8 2.4h2.6a.3.3 0 01.2.6l-2 1.5.7 2.5a.3.3 0 01-.5.4l-2.1-1.5-2 1.5a.3.3 0 01-.6-.4l.7-2.5-2-1.5a.3.3 0 01.2-.6h2.5l.9-2.4a.3.3 0 01.6 0zM221 176.5l.7 2h2a.3.3 0 01.2.5l-1.7 1.2.7 2a.3.3 0 01-.5.3l-1.7-1.2-1.7 1.2a.3.3 0 01-.4-.3l.6-2-1.7-1.2a.3.3 0 01.2-.5h2.1l.7-2a.3.3 0 01.5 0zm62.8-41l.8 2.5h2.7a.3.3 0 01.2.6l-2.1 1.6.7 2.5a.3.3 0 01-.5.4l-2.1-1.5-2.1 1.5a.4.4 0 01-.6-.4l.8-2.5-2.1-1.6a.3.3 0 01.2-.6h2.6l.8-2.5a.3.3 0 01.7 0zM207 164.3l.7 2h2a.3.3 0 01.2.5l-1.7 1.3.7 2a.3.3 0 01-.5.3l-1.7-1.2-1.7 1.2a.3.3 0 01-.4-.3l.6-2-1.7-1.3a.3.3 0 01.2-.5h2.1l.7-2a.3.3 0 01.5 0zm10.1 28l1 3h3.2a.4.4 0 01.2.8L219 198l1 3a.4.4 0 01-.7.5l-2.5-1.9-2.6 1.9a.4.4 0 01-.7-.5l1-3-2.5-1.9a.4.4 0 01.2-.8h3.2l1-3a.4.4 0 01.7 0zm77.8 14.7l.6 2h2a.3.3 0 01.2.4l-1.6 1.2.6 1.9a.3.3 0 01-.4.3l-1.7-1.2-1.6 1.2a.3.3 0 01-.4-.3l.6-1.9-1.6-1.2a.3.3 0 01.1-.5h2l.7-1.9a.3.3 0 01.5 0zm7-14.4l.8 2.4h2.5a.3.3 0 01.3.7l-2.1 1.5.8 2.4a.3.3 0 01-.6.4l-2-1.5-2.1 1.5a.3.3 0 01-.6-.4l.8-2.4-2-1.5a.3.3 0 01.1-.6h2.6l.8-2.4a.3.3 0 01.7-.1z"
      ></path>
    </svg>
  );
}

function UnitedStatesFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 335.45" {...props}>
      <path
        fill="#f5f5f5"
        d="M473.65.01H38.35A38.34 38.34 0 000 38.35v258.76a38.35 38.35 0 0038.35 38.35h435.3A38.35 38.35 0 00512 297.11V38.35A38.34 38.34 0 00473.65.01z"
      ></path>
      <path
        fill="#ff4b55"
        d="M2.11 25.81h507.78A38.34 38.34 0 00473.66.01H38.35a38.35 38.35 0 00-36.24 25.8z"
      ></path>
      <path fill="#ff4b55" d="M0 103.22H512V129.02H0z"></path>
      <path fill="#ff4b55" d="M0 51.61H512V77.41H0z"></path>
      <path fill="#ff4b55" d="M0 171.8a8.83 8.83 0 008.83 8.83H512v-25.8H0z"></path>
      <path fill="#ff4b55" d="M0 258.05H512V283.85H0z"></path>
      <path
        fill="#ff4b55"
        d="M509.89 309.65H2.11a38.35 38.35 0 0036.24 25.8h435.3a38.35 38.35 0 0036.24-25.8z"
      ></path>
      <path fill="#ff4b55" d="M0 206.43H512V232.23000000000002H0z"></path>
      <path
        fill="#41479b"
        d="M8.83 180.63h220.69a8.83 8.83 0 008.83-8.83V8.83A8.84 8.84 0 00229.52 0H38.35A38.36 38.36 0 000 38.35V171.8a8.83 8.83 0 008.83 8.83z"
      ></path>
      <path
        fill="#f5f5f5"
        d="M24.79 20.27l1.95 5.86h6.18a.84.84 0 01.49 1.51l-5 3.66 1.86 5.89a.83.83 0 01-1.28.93l-5-3.59-5 3.59a.83.83 0 01-1.28-.92l1.86-5.89-5-3.67a.83.83 0 01.49-1.5h6.18l1.95-5.86a.83.83 0 011.6-.01zM24.79 50.92l1.95 5.86h6.18a.83.83 0 01.49 1.5l-5 3.67 1.86 5.89a.83.83 0 01-1.28.93l-5-3.59-5 3.59a.83.83 0 01-1.28-.93l1.86-5.89-5-3.67a.83.83 0 01.49-1.5h6.18l1.95-5.86a.83.83 0 011.6 0zM24.79 81.58l1.95 5.86h6.18a.83.83 0 01.49 1.5l-5 3.67 1.86 5.89a.83.83 0 01-1.28.93l-5-3.59-5 3.59a.83.83 0 01-1.28-.92l1.86-5.89-5-3.67a.84.84 0 01.49-1.51h6.18l1.95-5.86a.83.83 0 011.6 0zM24.79 112.23l1.95 5.86h6.18a.83.83 0 01.49 1.5l-5 3.67 1.86 5.89a.83.83 0 01-1.28.93l-5-3.6-5 3.6a.83.83 0 01-1.28-.93l1.86-5.89-5-3.67a.83.83 0 01.49-1.5h6.18l1.95-5.86a.83.83 0 011.6 0zM24.79 142.88l1.95 5.85 6.18.05a.83.83 0 01.49 1.5l-5 3.67 1.86 5.89a.83.83 0 01-1.28.93l-5-3.59-5 3.59a.83.83 0 01-1.28-.93l1.86-5.89-5-3.67a.83.83 0 01.49-1.5h6.18l1.95-5.86a.83.83 0 011.6-.04zM48.58 35.3l2 5.86h6.17a.83.83 0 01.49 1.5l-5 3.67 1.87 5.89a.83.83 0 01-1.28.93l-5-3.59-5 3.59a.83.83 0 01-1.28-.93l1.86-5.89-5-3.67a.83.83 0 01.49-1.5h6.18l2-5.86a.83.83 0 011.5 0zM48.58 65.95l2 5.86h6.17a.83.83 0 01.49 1.5l-5 3.67 1.87 5.89a.84.84 0 01-1.28.93l-5-3.6-5 3.6a.84.84 0 01-1.28-.93l1.86-5.89-5-3.67a.83.83 0 01.49-1.5h6.18l2-5.86a.83.83 0 011.5 0zM48.58 96.61l2 5.86h6.17a.83.83 0 01.49 1.5l-5 3.67 1.87 5.89a.83.83 0 01-1.28.93l-5-3.59-5 3.59a.83.83 0 01-1.28-.93l1.8-5.8-5-3.67a.83.83 0 01.49-1.5l6.18-.05 2-5.86a.83.83 0 011.56-.04zM48.58 127.26l2 5.86 6.17.05a.83.83 0 01.49 1.5l-5 3.67 1.87 5.89a.84.84 0 01-1.28.93l-5-3.6-5 3.6a.84.84 0 01-1.28-.93l1.86-5.89-5-3.67a.83.83 0 01.49-1.5l6.18-.05 2-5.86a.83.83 0 011.5 0zM72.38 20.27l2 5.86h6.18a.83.83 0 01.44 1.6l-5 3.66 1.86 5.89a.83.83 0 01-1.28.93l-5-3.59-5 3.59a.83.83 0 01-1.28-.93l1.87-5.89-5-3.66a.84.84 0 01.49-1.51h6.17l2-5.86a.83.83 0 011.55-.09zM72.38 50.92l2 5.86h6.18a.83.83 0 01.48 1.5l-5 3.67 1.86 5.89a.84.84 0 01-1.28.93l-5-3.6-5 3.6a.84.84 0 01-1.28-.93l1.87-5.89-5-3.67a.83.83 0 01.49-1.5h6.17l2-5.86a.83.83 0 011.51 0zM72.38 81.58l2 5.86h6.18a.83.83 0 01.48 1.5l-5 3.67 1.86 5.89a.83.83 0 01-1.28.93l-5-3.59-5 3.59a.83.83 0 01-1.28-.93l1.87-5.89-5-3.67a.83.83 0 01.49-1.5h6.17l2-5.86a.83.83 0 011.51 0zM72.38 112.23l2 5.86h6.18a.83.83 0 01.48 1.5l-5 3.67 1.86 5.89a.84.84 0 01-1.28.93l-5-3.6-5 3.6a.84.84 0 01-1.28-.93l1.87-5.89-5-3.67a.83.83 0 01.49-1.5h6.17l2-5.86a.83.83 0 011.51 0zM72.38 142.88l2 5.86 6.18.05a.83.83 0 01.48 1.5l-5 3.67 1.86 5.89a.83.83 0 01-1.28.93l-5-3.59-5 3.59a.84.84 0 01-1.28-.93l1.87-5.89-5-3.67a.83.83 0 01.49-1.5l6.17-.05 2-5.86a.84.84 0 011.51 0zM96.17 35.3l2 5.86h6.18a.83.83 0 01.49 1.5l-5 3.67 1.86 5.89a.83.83 0 01-1.28.93l-5-3.59-5 3.59a.83.83 0 01-1.27-.93l1.86-5.89-5.01-3.6a.83.83 0 01.49-1.5h6.18l2-5.86a.83.83 0 011.5-.07zM96.17 65.95l2 5.86h6.18a.83.83 0 01.49 1.5l-5 3.67 1.86 5.89a.83.83 0 01-1.28.93l-5-3.6-5 3.6a.83.83 0 01-1.27-.93l1.86-5.89-5-3.67a.83.83 0 01.49-1.5h6.18l2-5.86a.83.83 0 011.49 0zM96.17 96.61l2 5.86h6.18a.83.83 0 01.49 1.5l-5 3.67 1.86 5.89a.83.83 0 01-1.28.93l-5-3.59-5 3.59a.83.83 0 01-1.27-.93l1.79-5.8-5-3.67a.83.83 0 01.49-1.5l6.18-.05 2-5.86a.83.83 0 011.56-.04zM96.17 127.26l2 5.86 6.18.05a.83.83 0 01.49 1.5l-5 3.67 1.86 5.89a.83.83 0 01-1.28.93l-5-3.6-5 3.6a.83.83 0 01-1.27-.93l1.86-5.89-5-3.67a.83.83 0 01.49-1.5l6.18-.05 2-5.86a.83.83 0 011.49 0zM120 20.27l2 5.86h6.17a.84.84 0 01.49 1.51l-5 3.66 1.87 5.89a.83.83 0 01-1.28.93l-5-3.59-5 3.59a.83.83 0 01-1.28-.93l1.86-5.88-5-3.67a.84.84 0 01.49-1.51h6.18l1.95-5.86a.83.83 0 011.55 0zM120 50.92l2 5.86h6.17a.83.83 0 01.49 1.5l-5 3.67 1.87 5.89a.84.84 0 01-1.28.93l-5-3.6-5 3.6a.84.84 0 01-1.28-.93l1.86-5.89-5-3.67a.83.83 0 01.49-1.5h6.18l1.95-5.86a.83.83 0 011.55 0zM120 81.58l2 5.86h6.17a.83.83 0 01.49 1.5l-5 3.67 1.87 5.89a.83.83 0 01-1.28.93l-5-3.59-5 3.59a.83.83 0 01-1.28-.93l1.86-5.89-5-3.67a.83.83 0 01.49-1.5l6.18-.05 1.95-5.86a.83.83 0 011.55.05zM120 112.23l2 5.86h6.17a.83.83 0 01.49 1.5l-5 3.67 1.87 5.89a.84.84 0 01-1.28.93l-5-3.6-5 3.6a.84.84 0 01-1.28-.93l1.86-5.89-5-3.67a.83.83 0 01.49-1.5h6.18l1.95-5.86a.83.83 0 011.55 0zM120 142.88l2 5.86 6.17.05a.83.83 0 01.49 1.5l-5 3.67 1.87 5.89a.83.83 0 01-1.28.93l-5-3.59-5 3.59a.84.84 0 01-1.28-.93l1.86-5.89-5-3.67a.83.83 0 01.49-1.5l6.18-.05 1.95-5.86a.84.84 0 011.55 0zM143.76 35.3l2 5.86h6.18a.83.83 0 01.48 1.5l-5 3.67 1.86 5.89a.83.83 0 01-1.28.93l-5-3.59-5 3.59a.83.83 0 01-1.28-.93l1.87-5.89-5-3.67a.83.83 0 01.49-1.5h6.17l2-5.86a.83.83 0 011.51 0zM143.76 65.95l2 5.86h6.18a.83.83 0 01.48 1.5l-5 3.67 1.86 5.89a.84.84 0 01-1.28.93l-5-3.6-5 3.6a.84.84 0 01-1.28-.93l1.87-5.89-5-3.67a.83.83 0 01.49-1.5h6.17l2-5.86a.83.83 0 011.51 0zM143.76 96.61l2 5.86h6.18a.83.83 0 01.48 1.5l-5 3.67 1.86 5.89a.83.83 0 01-1.28.93l-5-3.59-5 3.59a.83.83 0 01-1.28-.93l1.87-5.89-5-3.67a.83.83 0 01.49-1.5l6.17-.05 2-5.86a.83.83 0 011.51.05zM143.76 127.26l2 5.86 6.18.05a.83.83 0 01.48 1.5l-5 3.67 1.86 5.89a.84.84 0 01-1.28.93l-5-3.6-5 3.6a.84.84 0 01-1.28-.93l1.87-5.89-5-3.67a.83.83 0 01.49-1.5l6.17-.05 2-5.86a.83.83 0 011.51 0zM167.55 20.27l1.95 5.86h6.18a.84.84 0 01.49 1.51l-5 3.66 1.86 5.89a.83.83 0 01-1.27.93l-5-3.59-5 3.59a.83.83 0 01-1.28-.93l1.86-5.89-5-3.66a.84.84 0 01.49-1.51h6.18l1.95-5.86a.83.83 0 011.59 0zM167.55 50.92l1.95 5.86h6.18a.83.83 0 01.49 1.5l-5 3.67 1.86 5.89a.83.83 0 01-1.27.93l-5-3.6-5 3.6a.83.83 0 01-1.28-.93l1.86-5.89-5-3.67a.83.83 0 01.49-1.5h6.18l1.95-5.86a.83.83 0 011.59 0zM167.55 81.58l1.95 5.86h6.18a.83.83 0 01.49 1.5l-5 3.67 1.86 5.89a.83.83 0 01-1.27.93l-5-3.59-5 3.59a.83.83 0 01-1.28-.93l1.86-5.89-5-3.67a.83.83 0 01.49-1.5h6.18l1.95-5.86a.83.83 0 011.59 0zM167.55 112.23l1.95 5.86h6.18a.83.83 0 01.49 1.5l-5 3.67 1.86 5.89a.83.83 0 01-1.27.93l-5-3.6-5 3.6a.83.83 0 01-1.28-.93l1.86-5.89-5-3.67a.83.83 0 01.49-1.5h6.18l1.99-5.86a.83.83 0 011.55 0zM167.55 142.88l1.95 5.85 6.18.05a.83.83 0 01.49 1.5l-5 3.67 1.86 5.89a.83.83 0 01-1.27.93l-5-3.59-5 3.59a.83.83 0 01-1.28-.93l1.86-5.89-5-3.67a.83.83 0 01.49-1.5l6.17-.05 1.95-5.86a.84.84 0 011.6.01zM191.34 35.3l2 5.86h6.17a.83.83 0 01.49 1.57l-5 3.67 1.87 5.89a.83.83 0 01-1.28.93l-5-3.59-5 3.59a.83.83 0 01-1.28-.93l1.86-5.89-5-3.67a.83.83 0 01.48-1.5h6.18l1.95-5.86a.83.83 0 011.56-.07zM191.34 65.95l2 5.86h6.17a.83.83 0 01.49 1.5l-5 3.67 1.87 5.89a.84.84 0 01-1.28.93l-5-3.6-5 3.6a.84.84 0 01-1.28-.93l1.86-5.89-5-3.67a.83.83 0 01.48-1.5h6.18l1.95-5.86a.83.83 0 011.56 0zM191.34 96.61l2 5.86h6.17a.83.83 0 01.49 1.5l-5 3.76 1.87 5.89a.83.83 0 01-1.28.93l-5-3.59-5 3.59a.83.83 0 01-1.28-.93l1.86-5.89-5-3.67a.83.83 0 01.48-1.5l6.18-.05 1.95-5.86a.83.83 0 011.56-.04zM191.34 127.26l2 5.86 6.17.05a.83.83 0 01.49 1.5l-5 3.67 1.87 5.89a.84.84 0 01-1.28.93l-5-3.6-5 3.6a.84.84 0 01-1.28-.93l1.86-5.89-5-3.67a.83.83 0 01.48-1.5l6.18-.05 1.95-5.86a.83.83 0 011.56 0zM215.14 20.27l2 5.86h6.18a.84.84 0 01.49 1.51l-5 3.66 1.86 5.89a.83.83 0 01-1.28.93l-5-3.59-5 3.59a.83.83 0 01-1.28-.93l1.87-5.89-5-3.66a.84.84 0 01.49-1.51h6.17l2-5.86a.83.83 0 011.5 0zM215.14 50.92l2 5.86h6.18a.83.83 0 01.49 1.5l-5 3.67 1.86 5.89a.84.84 0 01-1.28.93l-5-3.6-5 3.6a.84.84 0 01-1.28-.93l1.87-5.89-5-3.67a.83.83 0 01.49-1.5h6.17l2-5.86a.83.83 0 011.5 0zM215.14 81.58l2 5.86h6.18a.83.83 0 01.49 1.5l-5 3.67 1.86 5.89a.83.83 0 01-1.28.93l-5-3.59-5 3.59a.83.83 0 01-1.28-.93l1.87-5.89-5-3.67a.83.83 0 01.49-1.5h6.17l2-5.86a.83.83 0 011.5 0zM215.14 112.23l2 5.86h6.18a.83.83 0 01.49 1.5l-5 3.67 1.86 5.89a.84.84 0 01-1.28.93l-5-3.6-5 3.6a.84.84 0 01-1.28-.93l1.87-5.89-5-3.67a.83.83 0 01.49-1.5h6.17l2-5.86a.83.83 0 011.5 0zM215.14 142.88l2 5.86 6.18.05a.83.83 0 01.49 1.5l-5 3.67 1.86 5.89a.83.83 0 01-1.28.93l-5-3.59-5 3.59a.84.84 0 01-1.28-.93l1.87-5.89-5-3.67a.83.83 0 01.49-1.5l6.17-.05 2-5.86a.84.84 0 011.5 0z"
      ></path>
    </svg>
  );
}

type EntryDualLanguageProps = {
  label?: string;
  children: DualLanguageValue;
};

export function EntryDualLanguage({ label, children }: EntryDualLanguageProps) {
  const value = (
    <>
      <div>
        <UnitedStatesFlag width="1em" /> {children.en}
      </div>

      <div>
        <BrazilFlag width="1em" /> {children.pt}
      </div>
    </>
  );

  if (label) {
    return (
      <Flex>
        <div>
          <Label>{label}</Label>
        </div>
        <Value>{value}</Value>
      </Flex>
    );
  }

  return <Value>{value}</Value>;
}

type EntryLanguageProps = {
  label?: string;
  children?: string;
};

export function EntryLanguage({ label = 'language', children }: EntryLanguageProps) {
  if (!children) return <></>;

  return (
    <Flex>
      <div>
        <Label>{label}</Label>
      </div>
      <Value>{children === 'en' ? <UnitedStatesFlag width="1em" /> : <BrazilFlag width="1em" />}</Value>
    </Flex>
  );
}

type EntryNSFWProps = {
  value?: boolean;
};

export function EntryNSFW({ value }: EntryNSFWProps) {
  if (!value) return <></>;

  return (
    <Entry label="nsfw">
      <FireFilled style={{ color: 'hotpink' }} />
    </Entry>
  );
}

type EntryListTextProps = {
  label: string;
  children?: string[];
};

export function EntryListText({ label, children }: EntryListTextProps) {
  if (!children) return <></>;

  return <Entry label={label}>{children.join(', ')}</Entry>;
}
