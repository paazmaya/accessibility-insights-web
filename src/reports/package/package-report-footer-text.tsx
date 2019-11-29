// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import * as React from 'react';

import { ReactFCWithDisplayName } from 'common/react/named-fc';
import { ReportFooterProps } from 'reports/components/report-sections/report-footer';
import { ToolLink } from 'reports/components/report-sections/tool-link';

export const PackageReportFooter = (serviceName: string, reportFooter: React.FC<ReportFooterProps>) => {

    const footerText = ({ axeCoreVersion, browserSpec }) =>
        <>
            This automated checks result was generated using the {serviceName}{' '}
            that helps find some of the most common accessibility issues. The scan was
            performed using axe-core {axeCoreVersion} and {browserSpec}. For a complete
            WCAG 2.1 compliance assessment please visit{' '}<ToolLink />.
        </>;

    return ((props: ReportFooterProps) => reportFooter({ ...props, footerText })) as ReactFCWithDisplayName<ReportFooterProps>;
};