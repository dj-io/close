import { Avatar, CardHeader, IconButton } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { SuggestedLink } from '../../../pages/find/Find.Styles.ts';
import { profilePicUrl } from '../../api/user/Users.Api.ts';
import { UserActionTypes } from '../../enums/UserActionType.ts';
import { excerpt } from '../../utils/global.ts';
import { Submit } from '../buttons/Submit.tsx';

export const FriendCard: React.FC<IUserCardProps> = ({
	user,
	currentUser,
	follow,
	width,
	height,
}) => {
	const profilePicId = user.user_id ? user.user_id : user.id;
	const isFollowing = currentUser.followed
		?.map((id) => id.followedId)
		.find((id) => id === user.user_id);

	return (
		<CardHeader
			sx={{ width: width || 300, height: height || 40 }}
			avatar={
				<SuggestedLink to={`/${user?.username}`}>
					<IconButton>
						<Avatar alt={user?.username} src={profilePicUrl(profilePicId)} />
					</IconButton>
				</SuggestedLink>
			}
			title={user?.username}
			subheader={excerpt(user?.name, UserActionTypes.CHAR_MAX)}
			action={
				<Submit
					label={isFollowing ? 'Following' : 'Follow'}
					disabledButton={isFollowing}
					func={() => follow(user)}
					width={50}
				/>
			}
		/>
	);
};
