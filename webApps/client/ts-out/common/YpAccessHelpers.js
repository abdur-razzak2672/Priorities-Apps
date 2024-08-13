export class YpAccessHelpers {
    static _hasAdminRights(objectId, adminRights) {
        return (adminRights.find((o) => {
            return o.id == objectId;
        }) != null);
    }
    static _hasPromoterAccess(object, objectId, promoterRights) {
        if (object) {
            if (window.appUser && window.appUser.user) {
                if (window.appUser.user.id == object.user_id) {
                    return true;
                }
                else if (object.User && window.appUser.user.id == object.User.id) {
                    return true;
                }
                else {
                    if (window.appUser.promoterRights) {
                        return this._hasAdminRights(objectId, promoterRights);
                    }
                    else {
                        return false;
                    }
                }
            }
            else {
                return false;
            }
        }
        else if (!window.appUser) {
            return false;
        }
        else {
            console.warn('No object in hasAccess');
            return false;
        }
    }
    static checkGroupPromoterAccess(group) {
        if (group && window.appUser && window.appUser.promoterRights) {
            return this._hasPromoterAccess(group, group.id, window.appUser.promoterRights.GroupPromoters);
        }
        else if (group) {
            return false;
        }
        else {
            console.warn('No group in hasAccess');
            return false;
        }
    }
    static checkCommunityPromoterAccess(community) {
        if (community && window.appUser && window.appUser.promoterRights) {
            return this._hasPromoterAccess(community, community.id, window.appUser.promoterRights.CommunityPromoters);
        }
        else if (community) {
            return false;
        }
        else {
            console.warn('No community in hasAccess');
            return false;
        }
    }
    static _hasAccess(object, objectId, adminRights) {
        if (object) {
            if (window.appUser && window.appUser.user) {
                if (window.appUser.user.id == object.user_id) {
                    return true;
                }
                else if (object.User && window.appUser.user.id == object.User.id) {
                    return true;
                }
                else {
                    if (window.appUser.adminRights) {
                        return this._hasAdminRights(objectId, adminRights);
                    }
                    else {
                        return false;
                    }
                }
            }
            else {
                return false;
            }
        }
        else if (!window.appUser) {
            return false;
        }
        else {
            console.warn('No object in hasAccess');
            return false;
        }
    }
    static hasImageAccess(image, post) {
        if (image && post && window.appUser && window.appUser.adminRights) {
            return this._hasAccess(image, post.group_id, window.appUser.adminRights.GroupAdmins);
        }
        else {
            return false;
        }
    }
    static checkPostAccess(post) {
        if (post && window.appUser && window.appUser.adminRights) {
            return this._hasAccess(post, post.group_id, window.appUser.adminRights.GroupAdmins);
        }
        if (post && post.User && window.appUser && window.appUser.user) {
            return post.User.id === window.appUser.user.id;
        }
        else if (!post) {
            console.warn('No post in hasAccess');
            return false;
        }
        else {
            return false;
        }
    }
    static checkPointAccess(point) {
        if (point && point.Post && window.appUser && window.appUser.adminRights) {
            return this._hasAccess(point, point.Post.group_id, window.appUser.adminRights.GroupAdmins);
        }
        else if (point &&
            window.appUser &&
            window.appUser.user &&
            window.appUser.user.id == point.user_id) {
            return true;
        }
        else if (point) {
            return false;
        }
        else {
            //console.warn("No point in hasAccess");
            return false;
        }
    }
    static checkPostAdminOnlyAccess(post) {
        if (post && window.appUser && window.appUser.adminRights) {
            return this._hasAdminRights(post.group_id, window.appUser.adminRights.GroupAdmins);
        }
        else if (post) {
            return false;
        }
        else {
            console.warn('No post in hasAccess');
            return false;
        }
    }
    static checkGroupAccess(group) {
        if (group && window.appUser && window.appUser.adminRights) {
            return this._hasAccess(group, group.id, window.appUser.adminRights.GroupAdmins);
        }
        else if (group) {
            return false;
        }
        else {
            console.warn('No group in hasAccess');
            return false;
        }
    }
    static checkCommunityAccess(community) {
        if (community && window.appUser && window.appUser.adminRights) {
            return this._hasAccess(community, community.id, window.appUser.adminRights.CommunityAdmins);
        }
        else if (community) {
            return false;
        }
        else {
            console.warn('No community in hasAccess');
            return false;
        }
    }
    static checkDomainAccess(domain) {
        if (domain && window.appUser && window.appUser.adminRights) {
            return this._hasAccess(domain, domain.id, window.appUser.adminRights.DomainAdmins);
        }
        else if (domain) {
            return false;
        }
        else {
            console.warn('No domain in hasAccess');
            return false;
        }
    }
    static hasUserAccess(user) {
        if (user &&
            window.appUser &&
            window.appUser.user &&
            window.appUser.user.id == user.id) {
            return true;
        }
        else {
            return false;
        }
    }
}
//# sourceMappingURL=YpAccessHelpers.js.map